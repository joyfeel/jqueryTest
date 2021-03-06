//Closure cmdCount
function commandCounter () {
	var count = 0;
	return {
		increment: function () {
			count++;
		},
		decrement: function () {
			count--;
		},
		use: function () {
			return count;
		},
		initialization: function () {
			count = 0;
		}
	}
}

//Closure fileCount
function fileCounter () {
	var count = 0;
	return {
		set: function(number) {
			count = number;
		},
		use: function () {
			return count;
		},
		initialization: function () {
			count = 0;
		}
	}
}

$(function() {
	var cmdCount = commandCounter();
	var fileCount = fileCounter();
	var cmdType = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

	var files = new Array();
	var cmdListArray = new Array();
	var JSONObject = new Object();
	var hasArgument = true;	
	var sequenceFiles = new Array();
	var cmdLabelToTabel = new Array();

	var pollSequenceFileCount = 0;
	var statusDir = "../emmc/statusFiles/";
	var pollTestCaseCount = 0;
	var loopSendControl = false;

	var cmdArrayOfResultObject = new Array();	
	var cmdResultJSON = new Object();

	function cssTextDiv(count) {
		$(".cmdIndex").addClass("labelSetting");
		$(".textbox" + count).addClass("textTextBoxSetting");
		$(".filebox" + count).addClass("fileTextBoxSetting");
	}

	$( "li.cmdTypeA" ).on("click", function() {
		var selected = $(this).text();
		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[0] + "</p>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case A - TestCase
	$( "li.cmdTypeB" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();
		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var normalTestcaseNumber = parseInt($(this).find("span").text());

		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[1] + "</p>" +
		  "<span  class = 'testcaseNumber' hidden>" + normalTestcaseNumber + "</span>" +
		  "<label class = 'cmdIndex'>" + selected + "</label>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case B - Write
	$( "li.cmdTypeC" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());
		//3
		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[2] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" + 
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" +
			  "<input type='file' name='textbox" + cmdCount.use() + 
			  "' class='filebox" + cmdCount.use() + "' value='' >");

		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case C - ReadCase
	$( "li.cmdTypeD" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();
		//4
		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());
		
		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[3] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" + 
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case C - EraseCase
	$( "li.cmdTypeE" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();
		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());

		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[4] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" + 
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case D - GppCase
	$( "li.cmdTypeF" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());

		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[5] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" + 
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case D - UDACase
	$( "li.cmdTypeG" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());

		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[6] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" + 
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case Reset
	$( "li.cmdTypeH" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var normalTestcaseNumber = parseInt($(this).find("span").text());

		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[7] + "</p>" +
		  "<span  class = 'testcaseNumber' hidden>" + normalTestcaseNumber + "</span>" +
		  "<label class = 'cmdIndex'>" + selected + "</label>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case Set RW/BUFFERSIZE
	$( "li.cmdTypeI" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var normalTestcaseNumber = parseInt($(this).find("span").text());
		//3
		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[8] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + normalTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case Reset Timing and Bus_width
	$( "li.cmdTypeJ" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var normalTestcaseNumber = parseInt($(this).find("span").text());

		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[9] + "</p>" +
		  "<span  class = 'testcaseNumber' hidden>" + normalTestcaseNumber + "</span>" +
		  "<label class = 'cmdIndex'>" + selected + "</label>");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case K - Programming Key (Single File)
	$( "li.cmdTypeK" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());
		//3
		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[10] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='file' name='textbox" + cmdCount.use() + 
			  "' class='filebox" + cmdCount.use() + "' value='' >");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case L - Authenticated Data Write (Two File, Key + Data)
	$( "li.cmdTypeL" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());
		//3
		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[11] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='file' name='textbox" + cmdCount.use() + 
			  "' class='filebox" + cmdCount.use() + "' value=''>" + 
			  "<input type='file' name='textbox" + cmdCount.use() + 
			  "' class='filebox" + cmdCount.use() + "' value='' >");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case M - Authenticated Data Read (Single File and file in the disk)
	$( "li.cmdTypeM" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());
		//3
		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[12] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='file' name='textbox" + cmdCount.use() + 
			  "' class='filebox" + cmdCount.use() + "' value='' >");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	//Case N - Write
	$( "li.cmdTypeN" ).on("click", function() {
		var selected = $(this).clone().children().remove().end().text();

		var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
		var customTestcaseNumber = parseInt($(this).find("span").text());
		//3
		newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[13] + "</p>" +
			  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
			  "<label class = 'cmdIndex'>" + selected + "</label>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" + 
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" +
			  "<input type='text' name='textbox" + cmdCount.use() + 
			  "' class='textbox" + cmdCount.use() + "' value=''>" +			  
			  "<input type='file' name='textbox" + cmdCount.use() + 
			  "' class='filebox" + cmdCount.use() + "' value='' >");
		newDiv.appendTo(".TextBoxesGroup");

		cssTextDiv(cmdCount.use());
		cmdCount.increment();
	});

	$( ".TextBoxesGroup" ).on("click", ".cmdIndex", function() {
		cmdCount.decrement();
		$(this).parent().remove();
	});

	$( "#buttonResetOne" ).click(function() {
		$( "#buttonSendOne" ).show();
		$("#form2").show();
		$("#form3").show();
		cmdCount.initialization();
		fileCount.initialization();
		resetGlobalVariable();
		$( ".TextBoxesGroup" ).children().remove();
		$('.responseTable').remove();
		$("#buttonSaveJson").hide();
		$("#buttonSaveResult").hide();
	});

	$( "#buttonResetLoop" ).click(function() {
		$( "#buttonSendLoop" ).show();
		$("#form1").show();
		$("#form2").show();
		cmdCount.initialization();
		fileCount.initialization();
		resetGlobalVariable();
		$( ".TextBoxesGroup" ).children().remove();
		$('.responseTable').remove();
		loopSendControl = true;
	});	

	function resetGlobalVariable() {
		hasArgument = true;
	    cmdListArray.length = 0;

	    JSONObject.CMD = null;
	    //JSONObject = null;
		pollSequenceFileCount = 0;
		sequenceFiles.length = 0;
		pollTestCaseCount = 0;
		cmdLabelToTabel.length = 0;
	}

	$("#form1").on('submit', function(event) {
		event.stopPropagation(); 	// Stop stuff happening
		event.preventDefault();  	// Totally stop stuff happening

		myFormNormalSubmit(event);
	});

	function myFormNormalSubmit(event) {
		if (cmdCount.use() != 0) {
			processSendJSON();
			if (hasArgument == false) {
				resetGlobalVariable();
				alert ("One of the arguments is empty!");
				return false;	
			}
			hideButton();
			uploadFiles(event);
			$("#buttonSaveJson").show();
			createTable();
			doNormalPollSequenceFile();
		} else {
			alert ("You must select at least one command!");
			return false;
		}		
	}

	$("#form3").on('submit', function(event) {
		event.stopPropagation(); 	// Stop stuff happening
		event.preventDefault();  	// Totally stop stuff happening

		myFormUnlimitedSubmit(event);
		loopSendControl = false;
	});

	function myFormUnlimitedSubmit(event) {
		if (cmdCount.use() != 0) {
			processSendJSON();
			if (hasArgument == false) {
				resetGlobalVariable();
				alert ("One of the arguments is empty!");
				return false;	
			}
			hideUnlimitedButton();
			uploadFiles(event);
			//$("#buttonSaveJson").show();
			//createTable();

			startUnlimitedPollSequenceFile();
		} else if (cmdCount.use() === 0 && loopSendControl === false){
			alert ("You must select at least one command!");

			return false;
		}		
	}

	function hideUnlimitedButton() {
		$("#form1").hide();
		$("#form2").hide();
		$("#buttonSendLoop").hide();
	}

	function hideButton() {
		$("#buttonSendOne").hide();
		$("#form2").hide();
		$("#form3").hide();
	}

	var doUnlimitedPoll = {
		timer: null,
		currSequenceFile: null
	};

	function startUnlimitedPollSequenceFile () {
		doUnlimitedPoll.timer = setInterval(doUnlimitedPollSequenceFile, 1000);
	}

	function doUnlimitedPollSequenceFile() {
		doUnlimitedPoll.currSequenceFile = sequenceFiles[pollSequenceFileCount];
		//Check whether the file exists or not.
		if (fileExist(doUnlimitedPoll.currSequenceFile)) {

			//appendFileStatus(doUnlimitedPoll.currSequenceFile, true);		//Append the file content to the front page		
			pollSequenceFileCount++;
		} 

		//After finishing polling all of the sequence files, stop the setTimeout
		if (sequenceFiles.length == pollSequenceFileCount) {															
			clearInterval(doUnlimitedPoll.timer);
			//$("#buttonSaveResult").show();
			//cmdResultJSON.CMD = cmdArrayOfResultObject;
			sendResultJSON ();

			resetGlobalVariable();

			myFormUnlimitedSubmit(event);

			return false;
		} 
	}	

	function doNormalPollSequenceFile() {
		var currSequenceFile = sequenceFiles[pollSequenceFileCount];
		//Check whether the file exists or not.
		if (fileExist(currSequenceFile)) {
			appendFileStatus(currSequenceFile, false);		//Append the file content to the front page		
			pollSequenceFileCount++;
		}

		//After finishing polling all of the sequence files, stop the setTimeout
		if (sequenceFiles.length == pollSequenceFileCount) {															
			clearTimeout(doUnlimitedPoll.timer);
			$("#buttonSaveResult").show();
 
			//cmdResultJSON.CMD = cmdArrayOfResultObject;
			//sendResultJSON (cmdResultJSON);

			sendResultJSON ();
			//return false;
		} else {
			doUnlimitedPoll.timer = setTimeout(doNormalPollSequenceFile, 1500);
		}
	}

	// Catch the form submit and upload the files
	function uploadFiles(event) {
		processFileSubmit();
	}
	var httpObj = {
		http: null
	};

	function fileExist(file) {
		var http = new XMLHttpRequest();
		//var http = new XMLHttpRequest();
		http.open('HEAD', statusDir + file, false);
		http.send();

		if (http.status!=404) {
			http = null;

			return true;
		} else {
			http = null;

			return false;
		}
	}

	function appendFileStatus (file, unlimited) {
		var xhr = $.ajax({
    		url: statusDir + file,
    		dataType: 'text',
    		async: false,
    		cache: false,
    		success: function (data) { 
    			if (!unlimited) {
    				processResponseJSON(data); 	
    			}
    		}
		});

		xhr = null;
	}

	function createTable () {
		var table = $( "<table style='width:100%' border='1' class='responseTable'></table>" );
		table.appendTo(".ResponseGroup");

		var tr = $( "<tr></tr>" );
		$("<th style='width:25%' align='left'>" + "CMD" 			+ "</td>" + 
		"<th style='width:10%' align='left'>" 	+ "Argument[0]" 	+ "</td>" + 
		"<th style='width:10%' align='left'>" 	+ "Argument[1]" 	+ "</td>" + 
		"<th style='width:15%' align='left'>" 	+ "Argument[2]" 	+ "</td>" + 
		"<th style='width:10%' align='left'>" 	+ "Argument[3]" 	+ "</td>" + 
		"<th style='width:10%' align='left'>" 	+ "Resp       "		+ "</td>" + 
		"<th style='width:20%' align='left'>" 	+ "ReadFileName " 	+ "</td>").appendTo(tr);
		
		tr.appendTo(".responseTable");
	}

	function processResponseJSON (data) {
		var obj = $.parseJSON(data);
		var tr = $( "<tr></tr>" );
		var count = 0;
		var cmdResultObject = new Object();						// {Label + Argument + Response}

		var cmdLabel =  cmdLabelToTabel[pollTestCaseCount++].text();
		cmdResultObject.cmdLabel = cmdLabel;

		$("<td align='left'>" + cmdLabel + "</td>").appendTo(tr);

		cmdResultObject.cmdArgument = new Array();
		//cmdResultObject.cmdArgument = obj.Argument;
		if (obj.Argument != null) {
			$.each(obj.Argument, function(index, value) {
				cmdResultObject.cmdArgument.push(value.toString(16));
				$("<td align='center'>" + value.toString(16) + "</td>").appendTo(tr);
				count = index;
			});
		} else {
			count = -1;
		}

		for (var i = 0; i < (4 - count - 1); i++) {
			$("<td>" + "" + "</td>").appendTo(tr);
		}

		cmdResultObject.cmdResponse = obj.Response;
		$("<td align='center'>" + obj.Response + "</td>").appendTo(tr);
		$("<td align='center'>" + obj.ReadFileName + "</td>").appendTo(tr);

		cmdArrayOfResultObject.push(cmdResultObject);
		tr.appendTo(".responseTable");
	}

	function sendResultJSON () {
		/*
		var datas= [{
		    "title": "  Nac",
		    "no1": "1212",
		    "no2": "12126"
		},
		{
		    "title": "New",
		    "no1": "12",
		    "no2": "121"
		},
		{
		    "title": "San",
		    "no1": "1227",
		    "no2": "1"
		}];
		*/
		var xhr = $.ajax({
			url: "statusFiles/getResponse.php",
			type: "POST",
			dataType: "json",
			//data: datas,
			async: false,
			cache: false,
			contentType : 'application/json; charset=utf-8',
		    success: function(response) {
		    	console.log("OK!" + response);
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		    	console.log('ERRORS: ' + textStatus);
		    }
		});

		xhr = null;
	}

	function setCmdIndex (cmdObject, cmdIndex, testcase) {
		cmdLabelToTabel.push(cmdIndex);
		switch (cmdObject.CMDType) {
			case 1:
				return parseInt(cmdIndex.text().replace(/^Command/, "")); 
			default:
				return parseInt(testcase.text());
		}
	}

	function processSendJSON () {
		var timeStamp = new Date().toISOString().replace(/\D/g,"").substr(0,14);
		var CMDType, CMDINDEX, Argument, testcase;
		var tempSequenceFile;
		var localFileCount = 0;

		$(".divTextBox").each(function(index) {
			CMDType  = $( this ).children(".cmdType");			// Type		
			CMDINDEX = $( this ).children(".cmdIndex");			// Command
			testcase = $( this ).children(".testcaseNumber");	//
			Argument = $( this ).children("input");				// Argument
			var cmdObject = new Object();						// {Type + Command + Argument}

			cmdObject.CMDType  = parseInt(CMDType.text());
			cmdObject.CMDINDEX = setCmdIndex (cmdObject, CMDINDEX, testcase);

			cmdObject.Argument = new Array();
			$(Argument).each(function(index, value) {
				if ( $(this).val().length != 0 ) {
					if (this.type === "text") {
						if ($(this).hasClass("textFile")) {
							cmdObject.Argument.push ($(this).val().replace(/^.*\\/,""));	
						} else {
							cmdObject.Argument.push (parseInt( $(this).val(), 16 ));	
						}
					} else if (this.type === "file"){	
						cmdObject.Argument.push ( $(this).val().replace(/^.*\\/,"") );	
						fileCount.set(++localFileCount);	
					}
				} else {
					hasArgument = false;
				}
			});

			tempSequenceFile = timeStamp + index + ".json";
			sequenceFiles.push( tempSequenceFile );
			cmdObject.ReadFileName = tempSequenceFile;
			cmdListArray.push(cmdObject);
		});

		cmdObject = null;
		JSONObject.CMD = cmdListArray;

		//console.log(JSON.stringify(JSONObject));
	}

	var dateData = new FormData();

	function processFileSubmit () {
		console.log(fileCount.use());
		for (var i = 0; i < fileCount.use(); i++) {
			var temp = $('input[type=file]')[i].files;

			files = $.merge(files, temp);
		}

		//temp = null;
		// START A LOADING SPINNER HERE
		// Create a formdata object and add the files
		
		$.each(files, function(key, value) {
			dateData.append(key, value);
		});
		
		ajaxSendFile (dateData)

		dateData = null;
	}

	function ajaxSendFile (myData) {
		var xhr = $.ajax({
		    url: 'statusFiles/submit.php?files',
		    type: 'POST',
		    data: myData,
		    cache: false,
		    async: false,
		    dataType: 'json',
		    processData: false, // Don't process the files
		    contentType: false, // Set content type to false as jQuery will tell the server its a query string request
		    success: function(data, textStatus, jqXHR) {
		    	if(typeof data.error === 'undefined') {
					var formData = $(event.target).serialize();

					// You should sterilise the file names
					$.each(data.files, function(key, value) {
						formData = formData + '&filenames[]=' + value;
					});

					var myObj = {
						postFormData: formData,
						postCmdFIFO: JSON.stringify(JSONObject)
					};

					var xhr2 = $.ajax({
					    url: 'statusFiles/submit.php',
					    type: 'POST',
						data: myObj,
					    cache: false,
					    async: true,
					    dataType: 'json',
					    success: function(data, textStatus, jqXHR) {
					    	if(typeof data.error === 'undefined') {
					    		// Success so call function to process the form
					    		console.log('SUCCESS: ' + data.success);

					    		//return false
					    	} else {
					    		// Handle errors here
					    		console.log('ERRORS: ' + data.error);
					    	}
					    },
					    error: function(jqXHR, textStatus, errorThrown) {
					    	// Handle errors here
					    	console.log('ERRORS: ' + textStatus);
					    }, 
						complete: function() {
					    	// STOP LOADING SPINNER
					    }
					});

					myObj = null;
					delete myObj;

					xhr2 = null;
					formData = null;
		    	} else {
		    		console.log('ERRORS: ' + data.error);
		    	}
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		    	console.log('ERRORS: ' + textStatus);
		    }
		});

		xhr = null;
	}

	var myXHR = {
		xhr: null
	};

	function submitForm(event, data)
	{
		// Create a jQuery object from the form
		//$form = $(event.target);

		// Serialize the form data
		var formData = $(event.target).serialize();

		// You should sterilise the file names
		$.each(data.files, function(key, value) {
			formData = formData + '&filenames[]=' + value;
		});

		var myObj = {
			postFormData: formData,
			postCmdFIFO: JSON.stringify(JSONObject)
		};

		var xhr = $.ajax({
		    url: 'statusFiles/submit.php',
		    type: 'POST',
			data: myObj,
		    cache: false,
		    async: true,
		    dataType: 'json',
		    success: function(data, textStatus, jqXHR) {
		    	if(typeof data.error === 'undefined') {
		    		// Success so call function to process the form
		    		console.log('SUCCESS: ' + data.success);

		    		//return false
		    	} else {
		    		// Handle errors here
		    		console.log('ERRORS: ' + data.error);
		    	}
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		    	// Handle errors here
		    	console.log('ERRORS: ' + textStatus);
		    }, 
			complete: function() {
		    	// STOP LOADING SPINNER
		    }
		});

		myObj = null;
		delete myObj;

		xhr = null;
		formData = null;
    }
/*
	function submitForm2(event, data)
	{
		// Create a jQuery object from the form
		$form = $(event.target);

		// Serialize the form data
		var formData = $form.serialize();

		// You should sterilise the file names
		$.each(data.files, function(key, value) {
			formData = formData + '&filenames[]=' + value;
		});

		$.ajax({
		    url: 'statusFiles/php/file.php',
		    type: 'POST',
		    data: {
				postFormData : formData			
			},
		    cache: false,
		    async: false,
		    dataType: 'json',
		    success: function(data, textStatus, jqXHR) {
		    	if(typeof data.error === 'undefined') {
		    		// Success so call function to process the form
		    		console.log('SUCCESS: ' + data.success);
		    	} else {
		    		// Handle errors here
		    		console.log('ERRORS: ' + data.error);
		    	}
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		    	// Handle errors here
		    	console.log('ERRORS: ' + textStatus);
		    }, 
			complete: function() {
		    	// STOP LOADING SPINNER
		    }
		});
    }
*/
    function ajaxJSONFileUpload(fileName) {
		var formData = new FormData();
		var file = $("#buttonUploadJSON")[0].files[0];
		formData.append("jsonFile", file);
		console.log(file);

		$.ajax({
		    url: 'statusFiles/php/file.php?files',
		    type: 'POST',
		    data: formData,
		    cache: false,
		    async: false,
		    processData: false, // Don't process the files
		    contentType: false, // Set content type to false as jQuery will tell the server its a query string request
		    success: function(response) {
		    	console.log("OK!!!!" + response);
		    } 
		});
    }

	$("#buttonSaveJson").on("click", function () {
		$.ajax({
			url: 'statusFiles/getFile.php?download_file=CMD.json',
			type: 'POST',
			cache: false,
			processData: false,
			success: function(response) {
				console.log("OK2!!!!" + response);
			}
		});
	});

    $("#buttonUploadJSON").on("change", function() {
    	var fileName = $(this).val().replace(/^.*\\/,"");

		ajaxJSONFileUpload();
   	 	getJSON(fileName);
    });

	//Use full coding skill to clear the selected file
    $("#buttonClearSelectedFile").on("click", function() {
    	var control = $("#buttonUploadJSON");

    	control.replaceWith(control = control.clone(true));
    });

	function getJSON(fileName){
	  var result;
	  $.ajax({
	      type: 'GET',
	      url: "statusFiles/uploadFiles/" + fileName,
	      dataType: 'json',
	      cache: false,
	      async: false,
	      success: function(data){
				var CMD_length = data.CMD.length;
				console.log('CMD_length = ', CMD_length);
				for (var i = 0; i < CMD_length; i++) {
					switch (data.CMD[i].CMDType) {
						case 1:
							$("li.cmdTypeA").filter(function() {
								if ($(this).text().replace(/^Command/, "") == data.CMD[i].CMDINDEX) {
									var selected = $(this).text();
									var argument = data.CMD[i].Argument[0].toString(16);

									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");
									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[0] + "</p>" +
										  "<label class = 'cmdIndex'>" + selected + "</label>" +
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument + "'>");
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});
						break;
						case 2:
							$("li.cmdTypeB").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var normalTestcaseNumber = parseInt($(this).text());

									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[1] + "</p>" +
									  "<span  class = 'testcaseNumber' hidden>" + normalTestcaseNumber + "</span>" +
									  "<label class = 'cmdIndex'>" + selected + "</label>");
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});
						break;
						case 3:
							$("li.cmdTypeC").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var argument_start = data.CMD[i].Argument[0].toString(16);
									var argument_end   = data.CMD[i].Argument[1].toString(16);
									var pattern_file   = data.CMD[i].Argument[2];
									console.log(pattern_file);
									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var customTestcaseNumber = parseInt($(this).text());

									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[2] + "</p>" +
										  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
										  "<label class = 'cmdIndex'>" + selected + "</label>" +
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_start + "'>" + 
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_end + "'>" +
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textFile' value='" + pattern_file + "' disabled>");
										  /*
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='filebox" + cmdCount.use() + "' value='pattern2'>");
										  */
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});

						break;
						case 4:
							$("li.cmdTypeD").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var argument_start = data.CMD[i].Argument[0].toString(16);
									var argument_end   = data.CMD[i].Argument[1].toString(16);

									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var customTestcaseNumber = parseInt($(this).text());

									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[3] + "</p>" +
										  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
										  "<label class = 'cmdIndex'>" + selected + "</label>" +
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_start + "'>" + 
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_end + "'>");
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});
						break;
						case 5:
							$("li.cmdTypeE").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var argument_start = data.CMD[i].Argument[0].toString(16);
									var argument_end   = data.CMD[i].Argument[1].toString(16);

									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var customTestcaseNumber = parseInt($(this).text());

									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[4] + "</p>" +
										  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
										  "<label class = 'cmdIndex'>" + selected + "</label>" +
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_start + "'>" + 
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_end + "'>");
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});
												//<li class="cmdTypeE">ERASE<span hidden>0</span></li>
						break;
						case 6:
							$("li.cmdTypeF").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var argument_size 		= data.CMD[i].Argument[0].toString(16);
									var argument_enhanced   = data.CMD[i].Argument[1].toString(16);

									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var customTestcaseNumber = parseInt($(this).text());

									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[5] + "</p>" +
										  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
										  "<label class = 'cmdIndex'>" + selected + "</label>" +
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_size + "'>" + 
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_enhanced + "'>");
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});	
						break;						
						case 7:
							$("li.cmdTypeG").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var argument_start_address = data.CMD[i].Argument[0].toString(16);
									var argument_size   	   = data.CMD[i].Argument[1].toString(16);
									var argument_enhanced      = data.CMD[i].Argument[2].toString(16);

									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var customTestcaseNumber = parseInt($(this).text());

									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[6] + "</p>" +
										  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
										  "<label class = 'cmdIndex'>" + selected + "</label>" +
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_start_address + "'>" + 
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_size + "'>" +
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_enhanced + "'>");
									newDiv.appendTo(".TextBoxesGroup");


									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});	
						break;
						case 8:
							$("li.cmdTypeH").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var normalTestcaseNumber = parseInt($(this).text());

									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[7] + "</p>" +
									  "<span  class = 'testcaseNumber' hidden>" + normalTestcaseNumber + "</span>" +
									  "<label class = 'cmdIndex'>" + selected + "</label>");
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});
						break;
						case 9:
							$("li.cmdTypeI").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var buffer_len = data.CMD[i].Argument[0].toString(16);

									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var customTestcaseNumber = parseInt($(this).text());

									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[8] + "</p>" +
										  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
										  "<label class = 'cmdIndex'>" + selected + "</label>" +
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ buffer_len + "'>");
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();


									console.log('case 9???');
								}
								
							});
						break;
						case 10:
							$("li.cmdTypeJ").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var normalTestcaseNumber = parseInt($(this).text());

									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[9] + "</p>" +
									  "<span  class = 'testcaseNumber' hidden>" + normalTestcaseNumber + "</span>" +
									  "<label class = 'cmdIndex'>" + selected + "</label>");
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});
						break;
						case 11:
							$("li.cmdTypeK").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var normalTestcaseNumber = parseInt($(this).text());

									var file_rpmb_key  = data.CMD[i].Argument[0];
									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[10] + "</p>" +
									  "<span  class = 'testcaseNumber' hidden>" + normalTestcaseNumber + "</span>" +
									  "<label class = 'cmdIndex'>" + selected + "</label>" + 
 									  "<input type='text' name='textbox" + cmdCount.use() + 
									  "' class='textFile' value='" + file_rpmb_key + "' disabled>");
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});
						break;
						case 12:
							$("li.cmdTypeL").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var normalTestcaseNumber = parseInt($(this).text());

									var file_rpmb_key  = data.CMD[i].Argument[0];
									var file_rpmb_data  = data.CMD[i].Argument[1];
									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[11] + "</p>" +
									  "<span  class = 'testcaseNumber' hidden>" + normalTestcaseNumber + "</span>" +
									  "<label class = 'cmdIndex'>" + selected + "</label>" + 
 									  "<input type='text' name='textbox" + cmdCount.use() + 
									  "' class='textFile' value='" + file_rpmb_key + "' disabled>" + 
									  "<input type='text' name='textbox" + cmdCount.use() + 
									  "' class='textFile' value='" + file_rpmb_data + "' disabled>");
			  						  //"' class='textFile" + cmdCount.use() + "' value='' >");
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});
						break;
						case 13:
							$("li.cmdTypeM").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var normalTestcaseNumber = parseInt($(this).text());

									var file_rpmb_key  = data.CMD[i].Argument[0];
									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[12] + "</p>" +
									  "<span  class = 'testcaseNumber' hidden>" + normalTestcaseNumber + "</span>" +
									  "<label class = 'cmdIndex'>" + selected + "</label>" + 
 									  "<input type='text' name='textbox" + cmdCount.use() + 
									  "' class='textFile' value='" + file_rpmb_key + "' disabled>");
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});					
						break;
						case 14:
							$("li.cmdTypeN").find("span").filter(function() {
								if ($(this).text() == data.CMD[i].CMDINDEX) {
									var selected = $(this).parent().clone().children().remove().end().text();
									var argument_start = data.CMD[i].Argument[0].toString(16);
									var argument_end   = data.CMD[i].Argument[1].toString(16);
									var sleepLBA   	   = data.CMD[i].Argument[2].toString(16);
									var pattern_file   = data.CMD[i].Argument[3];
									var newDiv = $(document.createElement("div")).attr("class", "divTextBox");	
									var customTestcaseNumber = parseInt($(this).text());

									newDiv.after().html("<p class = 'cmdType' hidden>" + cmdType[13] + "</p>" +
										  "<span  class = 'testcaseNumber' hidden>" + customTestcaseNumber + "</span>" +
										  "<label class = 'cmdIndex'>" + selected + "</label>" +
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_start + "'>" + 
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ argument_end + "'>" +
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textbox" + cmdCount.use() + "' value='"+ sleepLBA + "'>" +										  
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='textFile' value='" + pattern_file + "' disabled>");
										  /*
										  "<input type='text' name='textbox" + cmdCount.use() + 
										  "' class='filebox" + cmdCount.use() + "' value='pattern2'>");
										  */
									newDiv.appendTo(".TextBoxesGroup");

									cssTextDiv(cmdCount.use());
									cmdCount.increment();
								}
							});
						break;						
						default:
					}
				}

	      },
	      error: function(){
	          console.log('failed.');
	      }
	  });

	}

});