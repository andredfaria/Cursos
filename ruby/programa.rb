#comentario em ruby
#primeiros passos e ruby
#run code = ruby nome_do_arquivo. rb
#sem ;
# IRB Terminal ruby
#gem install pry

nome_completo = "André de Faria Carvalho"

#print
puts nome_completo

nome_completo = nil

puts nome_completo.nil?

#funcao

preco = 50

def muda_preco
  preco = 100
  puts preco
end

muda_preco
puts preco

puts "digite "
nome = gets

puts nome
