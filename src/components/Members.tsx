import { Grid } from "@plyaz/ui";

import { cn } from "src/utils/cn";
import { type TeamMembers } from "@/types";

import { Member } from "./Member";

interface MembersProps {
  members: TeamMembers[];
}

export const Members = ({ members }: MembersProps) => {
  return (
    <Grid
      justify={"center"}
      align="center"
      className={cn(
        `gap-10 xl:gap-x-20 xl:gap-y-16 sm:grid-cols-3 lg:grid-cols-4 mt-5 lg:mt-0 xl:mt-14`,
      )}
      cols="2"
    >
      {members.map((member) => (
        <Member
          key={member.id}
          id={member.id}
          name={member.name}
          role={member.role}
        />
      ))}
    </Grid>
  );
};
