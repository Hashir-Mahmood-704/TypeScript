import os
import pickle
import logging

class FingerprintManager:
    def __init__(self, path=None, debug=False):
        self.file = None
        self.fingerprints = set()
        self.logdupes = True
        self.debug = debug
        self.logger = logging.getLogger(__name__)
        if path:
            self.file = open(os.path.join(path, 'fingerprints'), 'rb')
            self.file.seek(0)
            self.fingerprints.update(pickle.load(self.file))

    @classmethod
    def from_settings(cls, settings):
        debug = settings.getbool('DEBUG')
        return cls(job_dir(settings), debug)

    def request_seen(self, request):
        fp = self.request_fingerprint(request)
        if fp in self.fingerprints:
            return True
        self.fingerprints.add(fp)
        if self.file:
            self.file.write(fp + os.linesep)
        return False

    def request_fingerprint(self, request):
        return request_fingerprint(request)

    def close(self):
        if self.file:
            self.file.close()

def job_dir(settings):
    return settings.get('JOB_DIR', '.')

def request_fingerprint(request):
    return hash(request.url)
