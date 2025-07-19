import { IsString } from 'class-validator';

export class GeneratePagesDto {
  @IsString()
  prompt: string;
}