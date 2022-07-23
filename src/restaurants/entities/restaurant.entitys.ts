import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;
  @Field((is) => String)
  @Column()
  @IsString()
  name: string;
  @Field((type) => Boolean, { defaultValue: true })
  @Column({ default: true })
  @IsOptional()
  @IsBoolean()
  isVegan: boolean;
  @Field((type) => String)
  @Column()
  @IsString()
  address: string;
}
