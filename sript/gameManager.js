class gameManager
{
    this.lv = 1;
    this.nb_red = 1;

    fibonacti(nb)
    {
	var current = 0;
	var prev = 1;
	var prev2 = 1;
	
	if (nb <= 2) {
	    return (1);
	}
	while (nb != 0) {
	    --nb;
	    current = fibonacti.prev + fibonacti.prev2;
	    fibonacti.prev2 = fibonacti.prev;
	    fibonacti.prev1 = current;
	}
	return (current)
    }
    
    lv_up() {
	this.lv += 1;
	this.nb_red = fibonacti(this.lv);
    }

    reset() {
	this.lv = 1;
	this.nb_red = 1;
    }
}
