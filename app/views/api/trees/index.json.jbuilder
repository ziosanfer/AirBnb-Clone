@trees.each do |tree|
  json.set! tree.id do
    json.partial! 'tree', tree: tree
  end
end
