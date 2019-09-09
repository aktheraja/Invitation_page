

let ForReading = 1, ForWriting = 2, ForAppending = 8;
let TristateUseDefault = -2, TristateTrue = -1, TristateFalse = 0;


// Open the files for input and output
//CHANGE THESE LOCATIONS TO ENSURE THAT :
// a) testfile1.txt exists and
// b) testfile2.txt can be created and is writable
let filename1 = "D:\\database\\mytest\\testfile1.txt";
let filename2 = "D:\\database\\mytest\\testfile2.txt";

let f1 = fso.OpenTextFile(filename1, ForReading, true);
// Open the file for input.
f2 = fso.OpenTextFile(filename2, ForWriting);
f2.WriteLine("The following have been copied from input file :-");

// Read from the file and display the results.
while (!f1.AtEndOfStream)
{
let r = f1.ReadLine();	//This line will read the data to the input file
document.write (r + "<br />"); //This line will display the data on the screen
    f2.WriteLine(r);	//This line will write the data to the output file
    }
    f1.Close();
    f2.Close();
