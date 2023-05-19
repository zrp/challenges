import { PartialType } from '@nestjs/mapped-types';
import { CreateThreatDto } from './create-threat.dto';

export class UpdateThreatDto extends PartialType(CreateThreatDto) {
  id: number;
}
