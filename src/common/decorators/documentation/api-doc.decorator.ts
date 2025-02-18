import { applyDecorators } from '@nestjs/common';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';

export function ApiDocFor(apiDoc: {
  summary: string;
  status: number;
  description: string;
}) {
  return applyDecorators(
    ApiOperation({ summary: apiDoc.summary }),
    ApiResponse({ status: apiDoc.status, description: apiDoc.description }),
  );
}
