class Veiculo
    attr_accessor :marca, :valor, :tipo

    def initialize(marca:, valor:, tipo:)
        @marca = marca 
        @valor = valor 
        @tipo = tipo 
    end

    def informacoes
        "tipo de veiculo: #{tipo} | #{marca} | #{marca}"
    end
end
