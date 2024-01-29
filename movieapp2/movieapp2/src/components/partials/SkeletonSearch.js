import { Skeleton, Stack } from "@mui/material";

const SkeletonSearch = () => {
  return (
    <Stack sx={{ flexDirection: "row" }}>
      <Stack sx={{ marginRight: 2 }}>
        <Skeleton variant="rounded" width={210} height={350} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={210} height={60} /> <Skeleton variant="text" sx={{ fontSize: "2rem" }} />{" "}
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} /> <Skeleton variant="text" sx={{ fontSize: "2rem" }} />{" "}
        <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        <Skeleton variant="rounded" width={210} height={78} />
      </Stack>
    </Stack>
  );
};

export default SkeletonSearch;
