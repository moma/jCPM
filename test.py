import networkx as nx

G = nx.barabasi_albert_graph(100, 4 , seed=10)

print
print "var G = {}"
for n in G.nodes_iter():
	print "\tG [",n,"] =",G[n].keys()
# Copy/Paste this output in the Javascript for testing


from collections import defaultdict
def get_percolated_cliques(G, k):
	perc_graph = nx.Graph()
	cliques = [frozenset(c) for c in nx.find_cliques(G) if len(c) >= k]
	perc_graph.add_nodes_from(cliques)

	# First index which nodes are in which cliques
	membership_dict = defaultdict(list)
	for clique in cliques:
		for node in clique:
			membership_dict[node].append(clique)

	# For each clique, see which adjacent cliques percolate
	for clique in cliques:
		for adj_clique in get_adjacent_cliques(clique, membership_dict):
			if len(clique.intersection(adj_clique)) >= (k - 1):
				perc_graph.add_edge(clique, adj_clique)

	# Connected components of clique graph with perc edges
	# are the percolated cliques
	for component in nx.connected_components(perc_graph):
		yield(frozenset.union(*component))

def get_adjacent_cliques(clique, membership_dict):
	adjacent_cliques = set()
	for n in clique:
		for adj_clique in membership_dict[n]:
			if clique != adj_clique:
				adjacent_cliques.add(adj_clique)
	return adjacent_cliques



print
print
results = get_percolated_cliques(G , 4)
for i in results:
	print "cluster:",i