<?php 
	$uploadFolder = '/var/www/html/emmc/statusFiles/uploadFiles/';
	$statusFolder =  '/var/www/html/emmc/statusFiles/';
	$JSONfile = 'CMD.json';
	$executionFile = 'sudo ./eMMCTester';
	
	$data = array();
	if(isset($_GET['files'])) {	
		$error = false;
		$files = array();

		foreach($_FILES as $file) {
			if(move_uploaded_file($file['tmp_name'], $uploadFolder .basename($file['name']))) {
				$files[] = $uploadFolder .$file['name'];
			} else {
				$error = true;
			}
		}

		$data = ($error) ? array('error' => $file['name'] . 'There was an error uploading your files') : array('files' => $files);
	} else {
		$cmdFIFO = $_POST['postCmdFIFO'];

		if (json_decode($cmdFIFO) != null) {
		   $file = fopen($statusFolder . $JSONfile, 'w');
		   fwrite($file, $cmdFIFO);
		   fclose($file);
		}

        $data = array('success' => "Waiting for response...", 'formData' => $_POST['postFormData']);

		exec ("$executionFile $statusFolder $JSONfile");
	}
	
	echo json_encode($data);
?>

