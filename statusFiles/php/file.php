<?php
	$uploadFolder = '/var/www/html/emmc/statusFiles/uploadFiles/';

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
	}  

	echo json_encode($data);
?>