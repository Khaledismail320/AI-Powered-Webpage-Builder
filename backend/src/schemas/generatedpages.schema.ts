import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class GeneratedPages extends Document {
  @Prop({ required: true })
  prompt: string;

  @Prop({ required: true })
  generatedsections: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const GeneratedPagesSchema = SchemaFactory.createForClass(GeneratedPages);