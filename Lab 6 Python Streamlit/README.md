import streamlit as st

st.title("Tuition Net Calculator")

# Base cost
TOTAL_COST = 42540 + 2025
st.write("Total Cost Before Aid: $", TOTAL_COST)

# Inputs
gpa = st.number_input("Enter GPA:", 0.0, 4.0, step=0.01)
sai = st.number_input("Enter FAFSA SAI:", 0, step=100)
local = st.radio("Are you local?", ["Yes", "No"])

# Aid calculation
aid = 0

if gpa >= 3.5:
    aid += 20000
    st.write("You qualify for a $20,000 merit scholarship.")

if sai < 7395:
    pell = 7395 - sai
    aid += pell
    st.write(f"You qualify for a Pell Grant of ${pell}.")

if local == "Yes":
    aid += 5000
    st.write("You qualify for a $5,000 local scholarship.")

# Net cost
net = TOTAL_COST - aid
st.write("---")
st.write("Total Aid: $", aid)
st.write("Net Tuition After Aid: $", net)
