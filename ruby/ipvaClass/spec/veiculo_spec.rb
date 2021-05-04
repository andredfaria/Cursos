require_relative '../src/carro.rb'
require_relative '../src/utilitario.rb'

VEICULOS = [
  { klass: 'Carro', aliquota: 0.04 },
  { klass: 'Utilitario', aliquota: 0.02 }
]

class String
  def constantize
    Object.const_get self
  end
end

describe 'calcula o IPVA de um veiculo' do

  VEICULOS.each do |veiculo|
    context "quando for um #{veiculo[:klass]}" do
      subject { veiculo[:klass].constantize.new(marca: veiculo[:klass], valor: 50000) }

      it "retorna o valor do ipva com aliquota #{veiculo[:aliquota] * 100} por cento" do
        expect(subject.ipva).to eq(50000 * veiculo[:aliquota])
      end
    end
  end
end