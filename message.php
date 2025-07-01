<?php
// Create uploads directory if not exists
if (!file_exists('uploads')) {
    mkdir('uploads', 0777, true);
}

// Get and sanitize inputs
$name = htmlspecialchars($_POST['name']);
$mobile = htmlspecialchars($_POST['mobile']);
$village = htmlspecialchars($_POST['village']);
$message = htmlspecialchars($_POST['message']);
$imageName = "";

// Handle image upload
if (isset($_FILES['image']) && $_FILES['image']['error'] == 0) {
    $imageName = time() . '_' . basename($_FILES['image']['name']);
    $uploadPath = "uploads/" . $imageName;
    move_uploaded_file($_FILES['image']['tmp_name'], $uploadPath);
}

// Save to file or database (here using a simple file)
$data = "Name: $name\nVillage: $village\nMobile: $mobile\nMessage: $message\n";
if ($imageName !== "") {
    $data .= "Image: uploads/$imageName\n";
}
$data .= "------------------------------------\n";

// Append to messages.txt
file_put_contents("messages.txt", $data, FILE_APPEND);

echo "<h2>Thank you! Your message has been sent.</h2>";
echo "<a href='index.html'>Send Another</a>";
?>
