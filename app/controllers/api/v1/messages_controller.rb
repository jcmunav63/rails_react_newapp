module Api
  module V1
    class MessagesController < ApplicationController
      def index
        @message = Message.order('RANDOM()').first
        render json: { id: @message.id, message: @message.message }
      end
    end
  end
end
