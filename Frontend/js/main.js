console.log("JS connected");

document.getElementById("loanForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Loan form submitted");
});

function fetchLoans() {
    console.log("Fetching loans...");
}
fetchLoans();


function fetchPayments() {
    console.log("Fetching Payments...");
}
fetchPayments();