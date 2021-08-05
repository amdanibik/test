# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
<?php
function convertNumber($number) {
    $number = sprintf("%04d",$number);
    return $number;
}

?>

<form name="convert" method="post">
	Convert Number<br>
	<input type="text" name="number"><input type="submit" name="submit" value="convert">
</form>

<?php
	if(isset($_POST['submit'])){
		$number = $_POST['number'];
		echo convertNumber($number);
	}
?>
```

#### 2. After change the code, make a pull request
