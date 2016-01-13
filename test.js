
function get_percolated_cliques ( Graph , k ) {

    var jCPM = new CPM( Graph )
    var results = jCPM.k_clique_communities(k)

    return results;
}

// test graph (c/p from the test.py output)
var G = {}
    G [ 0 ] = [65, 66, 4, 6, 7, 8, 9, 42, 11, 16, 82, 19, 20, 22, 87, 68, 26, 28, 93, 95]
    G [ 1 ] = [4, 5, 9, 10, 15, 17, 18, 21, 26, 28, 30, 31, 37, 41, 43, 63, 66, 72, 74, 81, 83, 90]
    G [ 2 ] = [4, 5, 6, 7, 10, 11, 13, 15, 17, 19, 20, 23, 27, 32, 36, 37, 39, 57, 59, 65, 70, 80, 84, 85, 90, 91]
    G [ 3 ] = [96, 4, 5, 6, 7, 72, 57, 11, 12, 13, 79, 18, 82, 84, 21, 23, 25, 31]
    G [ 4 ] = [0, 1, 2, 3, 5, 7, 8, 9, 42, 75, 34, 14, 48, 51, 20, 53, 54, 25, 26, 92]
    G [ 5 ] = [1, 2, 3, 4, 6, 10, 12, 16, 18, 19, 84, 55, 24, 58]
    G [ 6 ] = [0, 64, 2, 3, 36, 5, 39, 8, 42, 75, 45, 47, 67, 97, 22, 55, 88, 89, 27, 62]
    G [ 7 ] = [0, 32, 2, 3, 4, 8, 11, 13, 14, 17, 50, 35, 84, 22, 87, 30]
    G [ 8 ] = [0, 4, 6, 7, 40, 9, 12, 17, 73, 24, 72, 59]
    G [ 9 ] = [0, 1, 4, 8, 10, 13, 14, 18, 27, 28, 34, 38, 46, 48, 49, 51, 60, 63, 64, 68, 77, 79, 89, 91]
    G [ 10 ] = [96, 1, 2, 36, 5, 70, 9, 75, 12, 15, 48, 76, 20, 41, 90, 29, 62, 37]
    G [ 11 ] = [0, 2, 3, 7, 40, 46, 50, 83, 21]
    G [ 12 ] = [97, 3, 5, 8, 10, 87, 94, 82, 14, 15, 16, 81, 50, 35, 52, 85, 23, 56, 25, 91, 62]
    G [ 13 ] = [2, 3, 68, 70, 38, 7, 40, 9, 42, 39, 61, 16, 21, 23, 71, 29, 53]
    G [ 14 ] = [96, 66, 4, 7, 9, 12, 44, 73, 24, 25]
    G [ 15 ] = [1, 2, 67, 10, 12, 93, 19, 24, 26, 28, 29]
    G [ 16 ] = [0, 33, 5, 12, 13, 49]
    G [ 17 ] = [1, 2, 7, 8, 44, 78]
    G [ 18 ] = [1, 3, 5, 39, 9, 99, 51]
    G [ 19 ] = [0, 2, 5, 38, 77, 15, 22, 29]
    G [ 20 ] = [0, 2, 4, 69, 71, 10, 78, 86, 55, 30, 31]
    G [ 21 ] = [1, 3, 11, 44, 13, 43]
    G [ 22 ] = [0, 65, 34, 35, 68, 69, 6, 7, 49, 19, 52, 86, 56, 58, 60, 31]
    G [ 23 ] = [2, 3, 74, 45, 12, 13, 47, 61]
    G [ 24 ] = [33, 35, 5, 8, 77, 14, 15, 56]
    G [ 25 ] = [64, 3, 4, 12, 14, 59]
    G [ 26 ] = [0, 1, 67, 4, 65, 32, 40, 41, 71, 15, 82, 53, 88, 89, 27, 93]
    G [ 27 ] = [2, 6, 38, 9, 54, 26, 30, 95]
    G [ 28 ] = [0, 1, 33, 9, 43, 15]
    G [ 29 ] = [33, 36, 41, 10, 13, 15, 80, 19, 63]
    G [ 30 ] = [32, 1, 7, 45, 20, 27, 62]
    G [ 31 ] = [96, 1, 3, 22, 44, 81, 20, 54, 58, 60, 94]
    G [ 32 ] = [2, 7, 34, 55, 26, 30]
    G [ 33 ] = [43, 45, 16, 88, 24, 28, 29]
    G [ 34 ] = [32, 4, 9, 47, 50, 22, 89]
    G [ 35 ] = [98, 7, 12, 22, 24, 59]
    G [ 36 ] = [2, 37, 6, 10, 46, 93, 49, 29]
    G [ 37 ] = [1, 10, 36, 2, 46]
    G [ 38 ] = [19, 9, 27, 13, 77]
    G [ 39 ] = [18, 86, 2, 6, 13]
    G [ 40 ] = [99, 8, 11, 13, 48, 26]
    G [ 41 ] = [1, 26, 75, 10, 29]
    G [ 42 ] = [0, 4, 13, 6]
    G [ 43 ] = [33, 1, 28, 79, 21, 90, 60, 61]
    G [ 44 ] = [17, 21, 14, 31]
    G [ 45 ] = [33, 6, 97, 52, 53, 23, 30]
    G [ 46 ] = [9, 11, 36, 37, 47]
    G [ 47 ] = [34, 83, 46, 6, 23]
    G [ 48 ] = [4, 40, 9, 10, 51, 73, 56]
    G [ 49 ] = [36, 9, 76, 16, 22, 87, 57, 91]
    G [ 50 ] = [34, 99, 7, 11, 12, 52, 61, 94]
    G [ 51 ] = [64, 4, 9, 48, 18, 54]
    G [ 52 ] = [69, 12, 76, 45, 50, 83, 85, 22]
    G [ 53 ] = [4, 73, 76, 13, 45, 26, 58]
    G [ 54 ] = [4, 69, 72, 51, 27, 92, 31]
    G [ 55 ] = [32, 20, 5, 6]
    G [ 56 ] = [12, 48, 88, 22, 24, 57]
    G [ 57 ] = [56, 49, 2, 3]
    G [ 58 ] = [5, 53, 22, 31, 94, 63]
    G [ 59 ] = [8, 25, 2, 35, 92]
    G [ 60 ] = [9, 43, 97, 22, 31]
    G [ 61 ] = [50, 43, 13, 70, 23]
    G [ 62 ] = [66, 6, 74, 12, 85, 10, 30]
    G [ 63 ] = [1, 67, 71, 9, 58, 29]
    G [ 64 ] = [6, 9, 79, 51, 25, 95]
    G [ 65 ] = [0, 26, 2, 22]
    G [ 66 ] = [0, 1, 62, 14, 95]
    G [ 67 ] = [99, 6, 74, 78, 15, 80, 26, 63]
    G [ 68 ] = [0, 9, 13, 22]
    G [ 69 ] = [20, 52, 22, 54]
    G [ 70 ] = [2, 13, 10, 61]
    G [ 71 ] = [26, 20, 13, 63]
    G [ 72 ] = [8, 1, 3, 54]
    G [ 73 ] = [8, 48, 53, 14, 80]
    G [ 74 ] = [1, 67, 92, 62, 23]
    G [ 75 ] = [41, 10, 4, 78, 6]
    G [ 76 ] = [49, 10, 98, 52, 53]
    G [ 77 ] = [24, 9, 19, 86, 38]
    G [ 78 ] = [17, 75, 67, 20]
    G [ 79 ] = [64, 9, 43, 3, 81]
    G [ 80 ] = [73, 2, 67, 29]
    G [ 81 ] = [1, 98, 31, 12, 79]
    G [ 82 ] = [0, 26, 3, 12]
    G [ 83 ] = [1, 11, 52, 47]
    G [ 84 ] = [2, 3, 5, 7]
    G [ 85 ] = [52, 2, 12, 62]
    G [ 86 ] = [20, 77, 22, 39]
    G [ 87 ] = [0, 49, 12, 7]
    G [ 88 ] = [56, 33, 26, 98, 6]
    G [ 89 ] = [9, 34, 26, 6]
    G [ 90 ] = [1, 2, 43, 10]
    G [ 91 ] = [49, 2, 12, 9]
    G [ 92 ] = [74, 59, 4, 54]
    G [ 93 ] = [0, 26, 36, 15]
    G [ 94 ] = [50, 12, 58, 31]
    G [ 95 ] = [0, 64, 66, 27]
    G [ 96 ] = [10, 3, 14, 31]
    G [ 97 ] = [12, 60, 45, 6]
    G [ 98 ] = [88, 81, 35, 76]
    G [ 99 ] = [40, 18, 67, 50]

var results = get_percolated_cliques( G , 4)

for(var i in results) {
    console.log("cluster:   ",results[i])
}
