import { PartialType } from "@nestjs/mapped-types";
import { CreateParentsDto } from "./create-parents.dto";


export class UpdateParentsDto extends PartialType(CreateParentsDto) {}