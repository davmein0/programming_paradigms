(ns taxation)

(defn tax [amount rate]
  (let [rate-d (/ rate 100.0)] ; Convert rate (%) to decimal
    (let [tax-amount (* amount rate-d)]
      (format "%.2f" tax-amount)))) ; Round to the nearest cent

(println (tax 117 7))

(ns application)

(println (taxation/tax 117 7))