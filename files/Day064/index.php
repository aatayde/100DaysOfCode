<?php 
# single line comment
// single line comment

/* 
Multi
Line
Comment
*/

// Variable 
// Start with $, can't stat with a number, have periods or dashes, &OR named "$this"
// Examples that are now allowed
// $this
// $2hello
// $var.2
// $name-3

// 3 types of data scalar types
// string, numeric, boolean, & null means has not been assigned yet.

// Arrays
// Indexed & associative 

// Example of associative array
$user = [
    'f_name' => 'Alejandro',
    'l_name' => 'Kalani',
    'age' => 30,
];

// String Concatination
$message = 'I\'m ' . $user['f_name'] . ' ' . $user['l_name'] . ', a level ' . $user['age'] . ' wizard!';
// concatinating assignment
$greeting = 'Hello';
$greeting .= ', World!';

// Example of indexed array
$skills = array(
    'HTML', 'CSS', 'JavaScript', 'PHP',
);

// update array
$user['favorite_OS'] = 'MacOS';

// Multidimensional arrays
$pets = [
    ['name' => 'Nala', 'breed' => 'cat', 'age' => 17],
    ['name' => 'Baby', 'breed' => 'dog', 'age' => 13],
    ['name' => 'Sierra', 'breed' => 'dog', 'age' => 5],
    ['name' => 'Jack', 'breed' => 'dog', 'age' => 4],
];

//  arithmetic operators
$item = 'lemon';
$stock = 3;
$cost = 0.33;
$wanted = 2;
$delivery = true;
$subtotal = $stock * $cost;
$tax = ($subtotal / 100) * 10;
$total = $subtotal + $tax;
// logic operators
$delivery = true;
$can_buy = ($wanted <= $stock) && ($delivery == true);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My first PHP page</title>
</head>
<body>
    <h1>
        <?php echo $greeting ?>
    </h1>
    <h2>
        <?= $message ?>
    </h2>
    <h3>
        <!-- PHP echo shorthand -->
        I'm currently learning <?= $skills[3] ?>.
    </h3>
    <h4>
        My favorite Operating System is <?php echo $user['favorite_OS'] ?>.
    </h4>
</body>
</html>