(def n (Integer/parseInt (first *command-line-args*))) ; Get int from command line arg
(def n (inc n)) ; range excludes end value
(defn square [x] (* x x)) ; returns num^2
(def square_seq (map square (range 1 n))) ; maps numbers to their squares
(doseq [x square_seq] ; print the sequence of squared numbers
  (println x))
(def sum (reduce + square_seq)) ; sum up all the squared numbers
(println "Sum =" sum)