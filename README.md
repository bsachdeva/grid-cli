grid-cli <br>
A simple CLI tool for generating grid components using Symbols API + DOMQL, and running your project with Parcel.

Features <br>
Clone a starter/template repository with init <br>
Generate a new table/grid component with create <br>
Pass X (columns) and Y (rows) dynamically <br>
Run your project immediately using Parcel <br>

Usage <br>
1. Clone a template repo <br>
   grid init [directory] <br>
   directory (optional): target folder. Defaults to current folder. <br>
   Example: grid init my-project <br>
   Then you need to cd to my-project and run npm install
2. Generate Grid Component with X and Y parameters <br>
   grid create [x] [y] <br>
   x (optional): number of columns, defaults to 16 <br>
   y (optional): number of rows, defaults to 8 <br>
   Example: grid create 4 6 <br>
   This generates a 4x6 table component.
