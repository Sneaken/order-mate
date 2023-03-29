import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDishDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  image?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;
}

export class UpdateDishDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  image?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;
}
