require_relative './veiculo.rb'

class Carro < Veiculo

    ALIQUOTA = 0.04

    def initialize(marca: , valor:)
        super marca: marca, valor: valor, tipo: 'Carro'
    end

    def ipva
        @valor * ALIQUOTA
    end

end
