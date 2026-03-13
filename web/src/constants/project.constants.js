/*
Copyright (C) 2025 fjiangming

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@fjiangming.com
*/

export const GITHUB_REPO_URL = 'https://github.com/fjiangming/new-api';
export const GITHUB_REPO_OWNER_URL = 'https://github.com/fjiangming';
export const GITHUB_RELEASES_API_URL =
  'https://api.github.com/repos/fjiangming/new-api/releases/latest';

export const getGitHubReleaseUrl = (tagName) =>
  `${GITHUB_REPO_URL}/releases/tag/${tagName}`;
