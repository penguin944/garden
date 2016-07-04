class FeedsController < ApplicationController
  def initialize
    @feeds = [];
  end

  # GET /api/feeds
  def index
    aio = Adafruit::IO::Client.new key: ENV['ADAFRUIT_IO_API_KEY']

    aio_feeds = aio.feeds.retrieve

    #get all aio feeds and map them to Feed model
    unless aio_feeds.nil?
      @feeds = aio_feeds.map do |aio_feed|
        Feed.new id: aio_feed.id, name: aio_feed.name
      end

      @feeds.sort! { |feed1, feed2| feed1.name <=> feed2.name }
    end

    render json: @feeds
  end

  # GET /api/feeds/:name
  def details
    #get aio feed for param :name and map to Feed model
    @feed = get_feed(params[:name])

    render json: @feed
  end

  private
  def get_feed (name)
    unless name.nil?
      aio = Adafruit::IO::Client.new key: ENV['ADAFRUIT_IO_API_KEY']

      aio_feed = aio.feeds.retrieve(name)
      aio_feed_data = aio.feeds(name).data.retrieve

      unless aio_feed_data.nil?
        feed_readings = aio_feed_data.map do |aio_data|
          Reading.new({
              id: aio_data.id,
              feed_id: aio_data.feed_id,
              value: aio_data.value,
              created_at: aio_data.created_at,
          })
        end

        feed_readings.sort! { |reading1, reading2| reading1.created_at <=> reading2.created_at }

        Feed.new ({
            id: aio_feed.id,
            name: aio_feed.name,
            last_value: aio_feed.last_value,
            readings: feed_readings
        })
      end
    end
  end
end
