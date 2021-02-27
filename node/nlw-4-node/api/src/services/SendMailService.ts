import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { Transporter } from "nodemailer";

class SendMailService {

  private client: Transporter

  constructor() {
    nodemailer.createTestAccount().then((account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass
        }
      });

      this.client = transporter;
    }))

  }

  async execute(to: string, subject: string, variables:object, path:string) {
    const template = fs.readFileSync(path).toString('utf8');

    const mailTemplateParce = handlebars.compile(template)

    const html = mailTemplateParce(variables)

    const massage = await this.client.sendMail({
      to,
      subject,
      html: html,
      from: "NPS <noreplay@nps.com.br>"
    })

    console.log('Message sent: %s', massage.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(massage));

  }
}

export default new SendMailService();