from __future__ import annotations

import argparse
import json

from .collectors import collect_live_sources
from .processor import build_index, export_index


def main() -> None:
    parser = argparse.ArgumentParser(description="Build Korea Country Image Index data.")
    parser.add_argument("--offline", action="store_true", help="Use only document-seeded statistics.")
    args = parser.parse_args()

    live = {} if args.offline else collect_live_sources()
    index = build_index(live)
    paths = export_index(index)
    print(json.dumps({key: str(value) for key, value in paths.items()}, ensure_ascii=False, indent=2))
    print(json.dumps(index["headline"], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
