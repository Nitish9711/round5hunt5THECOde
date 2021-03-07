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

const rows = [createData("n = 7, cuts = [1,3,4,5]", "16")];

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
      <h1>CUT THE ROD</h1>
      <p>
        After having rescued the captured Marines, and making contact with the
        UNSC frigate, Chief decides its time to arm the escapees for a proper
        assault. But, they have no weapons. The only source of weapons they have
        are Banished armouries. They do, however, have the explosive paste from
        all the grenades Chief stole earlier. They take out the paste and lump
        it into an explosive stick, so that they have a proper idea of what
        quantity of explosives they have. Now they break into fireteams and
        decide on cutting the stick. But the only proper cutting tool they have,
        a combat knife, is already pretty battered, and it has a limited
        durability.The durability of one cut is the length of the stick being
        cut, the total durability is the sum of durability spent on all cuts.
        When you cut a stick, it will be split into two smaller sticks (i.e. the
        sum of their lengths is the length of the stick before the cut).
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
	  So, if the explosive stick is of 9 units and given cuts, return the minimum total durability spent on the cuts.
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
                n = 9, cuts = [5,6,1,4,2]
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
