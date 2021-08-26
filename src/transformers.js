/*
 * Flow JS Testing
 *
 * Copyright 2021 Dapper Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const IMPORT_UTILITIES = "import TestUtilities from 0xf8d6e0586b0a20c7";
export const ADDRESS_BOOK = {
  "0x01": "Alice",
  "0x02": "Bob",
  "0x03": "Charlie",
  "0x04": "Dave",
  "0x05": "Eve",
};

export const mockBuiltIn = async (code) => {
  let injectedImports = `
    ${IMPORT_UTILITIES}
    ${code}  
  `;
  const updatedCode = injectedImports.replace(/getCurrentBlock\(\)./g, `TestUtilities.$&`);
  return updatedCode;
};

export const playgroundImport = async (code) => {
  let injectedImports = `
    ${IMPORT_UTILITIES}
    ${code}  
  `;
  const updatedCode = injectedImports.replace(/getAccount\(\)./g, `TestUtilities.$&`);
  return updatedCode;
};