FROM ruby:2.5
RUN gem install middleman && \
    curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install -y nodejs
WORKDIR /code
COPY . .
RUN bundle install
