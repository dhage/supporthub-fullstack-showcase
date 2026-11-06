import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@supporthub-fullstack-showcase/data-access-prisma';

@Injectable()
export class PrismaService extends PrismaClient {}