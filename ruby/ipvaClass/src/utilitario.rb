require_relative './veiculo.rb'

class Utilitario < Veiculo

    ALIQUOTA = 0.02

    def initialize(marca: , valor:)
        super marca: marca,valor: valor, tipo: 'utilitario'
    end

    def ipva
        @valor * ALIQUOTA
    end

end
