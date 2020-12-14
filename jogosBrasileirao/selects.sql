SELECT 	Ano, 
	Equipe_mandante, 
	Equipe_visitante, 
	Gols_mandante, 
	Gols_visitante, 
	vencedor, 
	arena
FROM jogos_brasileirao 
WHERE 	Equipe_visitante = 'São Paulo' 
	AND Equipe_mandante = 'Corinthians';

SELECT 	Ano, 
	Equipe_mandante, 
	Equipe_visitante, 
	Gols_mandante, 
	Gols_visitante, 
	vencedor, 
	arena
FROM jogos_brasileirao 
WHERE 	`Equipe_visitante` = 'São Paulo' 
	OR Equipe_mandante = 'São Paulo';