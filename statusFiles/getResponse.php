<?php  
	$statusFolder =  '/var/www/html/emmc/statusFiles/';
	$JSONfile = 'Result.json';

	
	if (is_ajax()) {


		$cmdFIFO = $_POST['datas'];
		$file = fopen($statusFolder . $JSONfile, 'w');
		   fwrite($file, $cmdFIFO);
		   fclose($file);

		if (json_decode($cmdFIFO) != null) {
		   $file = fopen($statusFolder . $JSONfile, 'w');
		   fwrite($file, $cmdFIFO);
		   fclose($file);
		}

		//$data = array('success' => "Waiting for response...", 'formData' => $_POST['postFormData']);
	}

	function is_ajax() {
  		return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
	}

	echo json_encode($cmdFIFO);
?>