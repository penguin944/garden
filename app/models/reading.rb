raclass Reading
  include ActiveModel::Model

  attr_accessor :id, :feed_id, :value, :created_at

  validates :id, presence: true
  validates :feed_id, presence: true
  validates :value, presence: true

  def initialize(attributes = {})
    super
  end
end
