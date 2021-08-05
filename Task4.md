# Task 4

#### 1. Make the code below cleaner and readable

```php
public function getPrice() {
    if($customer->group == 'distributor' && $customer->status == 'active') {
        if($customer->debt > 10000000) {
			return error('this customer cannot make a purchase due to his debt over limit');
		} else {
			return Price::get('distributor');
		}        
	} else if($customer->group == 'general' && $customer->status == 'active') {
		if($customer->debt > 10000000) {
			return error('this customer cannot make a purchase due to his debt over limit');
		} else {
			return Price::get('general');
		}
	} else if($customer->group == 'general' && $customer->status == 'active') {
		if($customer->debt > 10000000) {
			return error('this customer cannot make a purchase due to his debt over limit');
		} else {
			return Price::get('general');
		}
    }
}
```

#### 2. After change the code, make a pull request