FROM ruby:3.0.1

WORKDIR /opt/app

COPY Gemfile Gemfile

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get install -qq -y --no-install-recommends nodejs && \
    npm install --global yarn \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && apt-get update -qq

RUN bundle install && yarn install