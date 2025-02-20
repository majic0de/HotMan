import styled from "styled-components";
// import { useRecentBookings } from "./useRecentBookings";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template: auto 34rem auto / repeat(4, 1fr);
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  // const { isPending, bookings } = useRecentBookings();
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today&apos;s activity</div>
      <div>Chart stay duration</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
