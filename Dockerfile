
RUN apt-get update -qq && apt-get install -y  postgresql-client

RUN gem install bundler -v 2.2.6
# RUN gem install bundler -v 2.0.1
# RUN bundle lock --add-platform x86-mingw32 x86-mswin32 x64-mingw32 java
RUN bundle install

# Add a script to be executed every time the container starts.
# COPY entrypoint.sh /usr/bin/
# RUN chmod +x /usr/bin/entrypoint.sh
# ENTRYPOINT ["entrypoint.sh"]
# EXPOSE 80
# Start the main process.
# CMD ["rails", "server", "-b", "0.0.0.0"]