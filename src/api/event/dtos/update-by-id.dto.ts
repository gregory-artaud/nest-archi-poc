import { IsString } from 'class-validator';

export class UpdateByIdDto {
  @IsString()
  userId: string;

  @IsString()
  name: string;
}
