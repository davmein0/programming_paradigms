(require '[clojure.string :as str])

; Same directory
(def filepath "./temperatures.txt")

; Store temps from file in a list
(def rows (str/split (slurp filepath) #"\n"))

; C = 5/9 * F - 32
(defn toCelsius [f_temp]
  (/ (* 5.0 (- f_temp 32)) 9))

; Helper function to convert string to double
(defn toDouble [row] (Double/parseDouble row))

; Convert temps from Fahrenheit to Celsius
(def temps_c (map toCelsius (map toDouble rows)))

; average of temperatures
(defn avg [temp] (double (/ (reduce + temp)  (count temp))))

; Print the min, max, and average temperatures
(println "Min temperature:" (apply min temps_c))
(println "Max temperature:" (apply max temps_c))
(println "Average temperature:" (avg temps_c))