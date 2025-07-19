import { Module } from '@nestjs/common';
import { AibuilderController } from './aibuilder.controller';
import { AibuilderService } from './aibuilder.service';
import { GeneratedPages, GeneratedPagesSchema } from '../schemas/generatedpages.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GeneratedPages.name, schema: GeneratedPagesSchema },
    ]),
  ],
  controllers: [AibuilderController],
  providers: [AibuilderService]
})
export class AibuilderModule {}
