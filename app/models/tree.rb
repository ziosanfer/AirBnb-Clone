class Tree < ApplicationRecord
    validates :title, :body, presence: true
    
end
