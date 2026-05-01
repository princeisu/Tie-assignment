export const QUESTIONS = [
  {
    q: "What is the output of the following code?",
    code: `try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("caught")\nfinally:\n    print("done")`,
    options: ["caught", "done", "caught\ndone", "ZeroDivisionError"],
    answer: 2,
    feedback: "The except block catches the ZeroDivisionError and prints 'caught'. The finally block always runs, printing 'done'. Both lines appear in order."
  },
  {
    q: "Which exception is raised when you try to access a dictionary key that doesn't exist?",
    code: null,
    options: ["IndexError", "AttributeError", "KeyError", "ValueError"],
    answer: 2,
    feedback: "KeyError is raised when a mapping (like dict) key is not found. Use dict.get(key) or key in dict to avoid it safely."
  },
  {
    q: "What does the else clause do in a try/except block?",
    code: `try:\n    result = int("42")\nexcept ValueError:\n    print("bad input")\nelse:\n    print("success:", result)`,
    options: [
      "Runs if an exception was raised",
      "Runs only if no exception was raised",
      "Always runs, like finally",
      "Catches any remaining exceptions"
    ],
    answer: 1,
    feedback: "The else block runs only when the try block completes without raising an exception — the opposite of except. Here it prints 'success: 42'."
  },
  {
    q: "What happens when you use bare `except:` instead of `except Exception:`?",
    code: null,
    options: [
      "It only catches RuntimeError",
      "It catches all exceptions including SystemExit and KeyboardInterrupt",
      "It is a syntax error",
      "It behaves identically to except Exception:"
    ],
    answer: 1,
    feedback: "Bare except: catches everything — including SystemExit, KeyboardInterrupt, and GeneratorExit — which is usually undesirable. Always prefer except Exception: or a specific exception class."
  },
  {
    q: "What is the output of this code?",
    code: `def risky():\n    raise ValueError("oops")\n\ntry:\n    risky()\nexcept (TypeError, ValueError) as e:\n    print(type(e).__name__, str(e))`,
    options: [
      "ValueError oops",
      "TypeError oops",
      "oops",
      "Unhandled exception"
    ],
    answer: 0,
    feedback: "The tuple (TypeError, ValueError) catches either exception. The raised ValueError is caught, and type(e).__name__ gives 'ValueError', str(e) gives 'oops'."
  },
  {
    q: "Which of the following correctly defines a custom exception?",
    code: null,
    options: [
      "class MyError: pass",
      "class MyError(BaseException): pass",
      "class MyError(Exception): pass",
      "def MyError(Exception): pass"
    ],
    answer: 2,
    feedback: "Custom exceptions should inherit from Exception (not directly from BaseException). This integrates with normal except Exception: handlers. Inheriting BaseException is reserved for system-level exceptions."
  },
  {
    q: "What does `raise` (with no argument) do inside an except block?",
    code: `try:\n    int('abc')\nexcept ValueError:\n    print('logging error')\n    raise`,
    options: [
      "Raises a new ValueError with no message",
      "Re-raises the current exception unchanged",
      "Silences the exception",
      "Raises RuntimeError"
    ],
    answer: 1,
    feedback: "A bare raise inside an except block re-raises the caught exception, preserving the original traceback. Useful for logging an error and then letting it propagate."
  },
  {
    q: "What is the output of this code?",
    code: `try:\n    raise RuntimeError('boom')\nexcept RuntimeError:\n    x = 42\nfinally:\n    x = 99\n\nprint(x)`,
    options: ["42", "99", "RuntimeError: boom", "NameError"],
    answer: 1,
    feedback: "The except block sets x = 42, but the finally block always runs and sets x = 99. After the try/except/finally block, print(x) outputs 99."
  },
  {
    q: "What does the `assert` statement do in Python?",
    code: `assert x > 0, "x must be positive"`,
    options: [
      "It raises an AssertionError if the condition is False",
      "It catches all exceptions",
      "It ignores errors and continues execution",
      "It forces the program to exit gracefully"
    ],
    answer: 0,
    feedback: "The assert statement tests a condition and raises an AssertionError with the specified message if the condition evaluates to False. It is often used for debugging."
  },
  {
    q: "How do you explicitly chain exceptions in Python 3 to preserve the original traceback?",
    code: `try:\n    1 / 0\nexcept ZeroDivisionError as e:\n    raise ValueError("Invalid value") from e`,
    options: [
      "raise ValueError('Invalid value') with e",
      "raise ValueError('Invalid value') from e",
      "raise ValueError('Invalid value') cause e",
      "raise ValueError('Invalid value') and e"
    ],
    answer: 1,
    feedback: "Using `raise ... from ...` explicitly links a new exception to an old one. This makes debugging easier by indicating that the second exception was a direct result of the first."
  },
  {
    q: "If a `try` block has a `return` statement, and the `finally` block also has a `return` statement, what is returned?",
    code: `def test():\n    try:\n        return 1\n    finally:\n        return 2\n\nprint(test())`,
    options: [
      "1",
      "2",
      "A SyntaxError is raised",
      "1 and 2 as a tuple"
    ],
    answer: 1,
    feedback: "The finally block always runs just before the function ends. If finally has a return statement, it overrides any return statement that was executed in the try block."
  }
];
