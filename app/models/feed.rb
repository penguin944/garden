class Feed
  include ActiveModel::Model

  attr_accessor :id, :name, :last_value, :readings

  validates :id, presence: true
  validates :name, presence: true

  def initialize(attributes = {})
    super
  end
end
