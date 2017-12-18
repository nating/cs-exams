*These notes are based on slides by [François Pitié](https://francois.pitie.net/) that can be found [here](https://github.com/frcs/EE4C16/blob/master/handouts/handout-04-evaluating-classifier-performance.pdf)*

# Evaluating Classifier Performance

#### Terms for outcomes of Binary classifiers:
A **True Positive** or **True Negative** is when an outcome of an input is predicted correctly as positive or negative in a binary classifier.  
A **False Positive** or **False Positive** is when an outcome of an input is predicted incorrectly as positive or negative in a binary classifier.

---

A **Confusion Matrix** is a table of the number of false positives, false negatives, true positives and true negatives for each class.

---

#### Metrics for Classifier performance

**Recall** (or *sensitivity* or *true positive rate*) is the probability that a predicted positive is correct:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/recall-expression.png" width="400"/>

**Precision** is the probability that a positive prediction is indeed positive:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/precision-expression.png" width="400"/>

**False Positive Rate** is the proportion of negatives that are incorrectly labelled as positive:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/false-positive-rate-expression.png" width="400"/>

**Accuracy** is the probability that a prediction is correct:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/accuracy-expression.png" width="400"/>

**F1 Score** is the *Harmonic Mean* of Recall and precision. It is the Recall times the Precision over the Recall plus the Precision, all times two:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/f1-score-expression.png" width="400"/>

---

Performing well on a single metric is usually meaningless, and a good classifier should perform well on 2 metrics.

The **Receiver Operating Characteristic Curve** (*ROC*) curve of a binary classifier is created by plotting the true positive rate against the false positive rate.

For a multi-class classifier, a confusion matrix could look like this:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/multiclass-confusion-matrix.png" width="400"/>

**Micro Averaging** is a way of calculating combined classifier metrics that combines true positives, true negatives, false positives and false negatives of all *k* classes in a multi-class classifier:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/micro-averaging-example.png" width="400"/>

**Macro Averaging** is a way of calculating combined classifier metrics that averages the performances over the classes:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/macro-averaging-example.png" width="400"/>


---

#### Data Terms in Classifier Performance Measurement

A **Training Set** is the data used to learn the algorithm.

A **Validation Set** (or *Dev Set*) is the data used to tune the parameters of the algorithm.

A **Test Set** is the data used to fairly assess the performance of the algorithm.
