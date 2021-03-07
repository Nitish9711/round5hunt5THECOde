import React from "react";
import InputField from "./InputField";
import { useMediaQuery } from "react-responsive";
import {
	withStyles,
	Theme,
	createStyles,
	makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		body: {
			fontSize: 14,
		},
	})
)(TableCell);

const StyledTableRow = withStyles((theme: "Theme") =>
	createStyles({
		root: {
			backgroundColor: "#272c34",
			color: "white",
		},
	})
)(TableRow);

function createData(name: string, calories: string) {
	return { name, calories };
}

const rows = [
	createData("2zsds44@dfa", "aRabAsTa"),
	createData("4aerdfsg4343#$err44", "AraBaStA"),
];

const useStyles = makeStyles({
	table: {
		minWidth: 100,
	},
});

const Content = () => {
	const classes = useStyles();

	const isPortrait = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<div
			className="Content"
			style={{
				width: isPortrait ? "90%" : "70%",
			}}
		>
			<h1>Crash Landing</h1>
			<p>
			Master Chief and Echo 216 crash land on Installation 07, aka Zeta Halo,
			 which is now under the banner of the Banished. While establishing a perimeter around their crashed ship, 
			 his COM buzzes. He freezes and waits for his suit's intel unit to make sense of the static. 
			 All he hears is a garbled Banished battlenet announcement. He does, however, 
			 understand one line that grabs his attention: "...the humans we capt--being move-.... 
			With Cortana gone rogue and no longer with Chief, it now falls on you, 
			Echo 216 to help decipher this code and save the captured marines!
				<br/> <br/>
				The marines are currently in an unknown location. 
				The battlecom announcement that Chief intercepted is given below.
			</p>
			
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Sample Input</StyledTableCell>
							<StyledTableCell>Sample Output</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell
									component="th"
									scope="row"
									style={{ color: "white" }}
								>
									{row.name}
								</StyledTableCell>
								<StyledTableCell style={{ color: "white" }}>
									{row.calories}
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<h2>Question:</h2>
			<p>
			You have the responsibility to complete the mission, Decode the output of the given message to find the location of marines.
			</p>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Sample Input</StyledTableCell>
							<StyledTableCell>Sample Output</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<StyledTableRow>
							<StyledTableCell
								component="th"
								scope="row"
								style={{ color: "white" }}
							>
								6adsafda@#sdfdf$%%
							</StyledTableCell>
							<StyledTableCell style={{ color: "#e33371" }}>
								Find the Answer
							</StyledTableCell>
						</StyledTableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<br />

			<InputField />
		</div>
	);
};

export default Content;
